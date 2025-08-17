"use client";

import { useState } from 'react';
import { Button } from "./ui/button";
import { PricingModal } from "./PricingModal";

interface PricingCardButtonProps {
  isPopular: boolean;
  cta: string;
  selectedPlan: string;
}

export function PricingCardButton({ isPopular, cta, selectedPlan }: PricingCardButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        className={`cursor-pointer w-full ${isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
        size="lg"
        onClick={() => setIsModalOpen(true)}
      >
        {cta}
      </Button>
      <PricingModal 
        selectedPlan={selectedPlan}
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
}
