'use client';
import { Button } from '@nextui-org/react';
import React from 'react';

interface CTAButtonProps {
    onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ onClick }) => (
    <Button onClick={onClick} id="cta" color="primary">
        Be the First to Explore
    </Button>
);

export default CTAButton;