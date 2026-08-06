"use client";

import { useState } from 'react';
import { Button } from "@/components/design-system";
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
        variant={isPopular ? "primary" : "secondary"}
        className="cursor-pointer w-full"
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
