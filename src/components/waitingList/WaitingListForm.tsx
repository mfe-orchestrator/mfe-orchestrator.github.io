'use client';

import React, { useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { usePathname } from 'next/navigation';

interface WaitingListFormContentProps {
  accessPage: string;
  selectedPlan?: string;
}

const WaitingListFormContent  : React.FC<WaitingListFormContentProps> = ({ accessPage, selectedPlan }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!executeRecaptcha) {
      console.log("reCAPTCHA not available. Please try again.")
      toast.error('reCAPTCHA not available. Please try again.');
      return;
    }

    setIsLoading(true);
    
    try {
      const recaptchaToken = await executeRecaptcha('waiting_list_submit');
      const response = await fetch('https://console.mfe-orchestrator.dev/api/waiting-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          recaptchaToken,
          accessPage,
          selectedPlan,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join to community');
      }
      
      toast.success('Successfully joined to MFE orchestrator community!');
      setEmail('');
    } catch (error) {
      console.error('Error joining community:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to join community. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete='email'
            placeholder="Your email address"
            className="pl-12 h-14 text-lg border-2 border-primary/20 focus:border-primary/50 transition-colors text-foreground"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        <Button 
          type="submit" 
          size="lg"
          className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Joining...
            </>
          ) : (
            <span className="flex items-center gap-2 cursor-pointer">
              Complete!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Join 100+ developers on the MFE orchestrator community. No spam, unsubscribe anytime.
      </p>
    </form>
  );
};

interface WaitingListFormProps {
  selectedPlan?: string;
}

export const WaitingListForm : React.FC<WaitingListFormProps> = ({ selectedPlan }) => {
  const pathname = usePathname();
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
      <WaitingListFormContent accessPage={pathname} selectedPlan={selectedPlan}/>
    </GoogleReCaptchaProvider>
  );
};
