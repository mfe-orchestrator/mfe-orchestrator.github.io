'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WaitingListForm } from "./WaitingListForm";

interface PricingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan: string
}

export function PricingModal({ isOpen, onOpenChange, selectedPlan }: PricingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95%] sm:max-w-[800px] bg-background p-6 sm:p-8 rounded-lg [&>button]:text-white [&>button]:hover:text-white/80 [&>button]:focus-visible:ring-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white">Thank you for your interest!</DialogTitle>
          <DialogDescription className="text-center text-base">
            This was a smoke test to gauge interest in the product. 
            Leave your email below to stay updated on our progress and be the first to know when we launch!
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <WaitingListForm selectedPlan={selectedPlan} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
