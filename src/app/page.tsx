"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Zap, Settings, RefreshCw, CheckCircle } from 'lucide-react';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "How it works",          id: "how-it-works"},
        {
          name: "Who it's for",          id: "who-its-for"},
        {
          name: "Pricing",          id: "pricing"},
      ]}
      brandName="SignalHire"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="A custom outreach system that finds warm leads on autopilot"
      description="We build you a done-for-you signal monitoring machine — custom to your market, your targets, your voice. It runs every day without you touching it. You just take the calls."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "Hero"},
      ]}
      buttons={[
        {
          text: "Get your system built",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-man-mi-1775695471702-e0a61fb8.png",          alt: "Client 1"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-woman--1775695479791-54053c6b.png",          alt: "Client 2"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-man-mi-1775695488638-7eb05b42.png",          alt: "Client 3"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-woman--1775695497355-fce20d7d.png",          alt: "Client 4"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-man-mi-1775695505767-f331e20a.png",          alt: "Client 5"},
      ]}
      avatarText="Trusted by 500+ growth-focused agencies"
      marqueeItems={[
        {
          type: "text",          text: "Signal Tracking"},
        {
          type: "text",          text: "Lead Intelligence"},
        {
          type: "text",          text: "Automated Outreach"},
        {
          type: "text",          text: "Daily Reporting"},
        {
          type: "text",          text: "Growth Systems"},
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Alpha Recruit",        "TalentBridge",        "CreatorGrow",        "Foundry Hub",        "ScaleUp Media"]}
      title="Custom built for recruiting firms, talent managers, and creator agencies"
      description="Trusted by these industry leaders."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "We learn your market",          description: "You tell us who you want to reach, what signals matter, and what your outreach should sound like.",          buttonIcon: Zap,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png",          imageAlt: "A clean, minimalist UI card representing a signal monitoring dashboard. Shows three rows with header"},
        {
          title: "We build your system",          description: "We connect your signal sources, configure your outreach sequences, and set everything up in 48 hours.",          buttonIcon: Settings,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-man-mi-1775695471702-e0a61fb8.png",          imageAlt: ""},
        {
          title: "It runs every day",          description: "Every morning your system finds new warm prospects, drafts personalized outreach, and sends automatically.",          buttonIcon: RefreshCw,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-woman--1775695479791-54053c6b.png",          imageAlt: ""},
        {
          title: "You just take the calls",          description: "Focus on closing deals with warm, qualified prospects who already know who you are.",          buttonIcon: CheckCircle,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/professional-headshot-of-business-man-mi-1775695488638-7eb05b42.png",          imageAlt: ""},
      ]}
      title="How it works"
      description="Simple steps to build your custom automation machine."
    />
  </div>

  <div id="what-you-get" data-section="what-you-get">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Signal monitor",          price: "Tracking",          variant: "Signals",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"},
        {
          id: "2",          name: "Daily digest",          price: "Reporting",          variant: "Morning",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"},
        {
          id: "3",          name: "Personalized outreach",          price: "Automated",          variant: "Messaging",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"},
        {
          id: "4",          name: "Full dashboard",          price: "Insight",          variant: "Notion",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"},
        {
          id: "5",          name: "Scalability",          price: "Ready",          variant: "Systems",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"},
        {
          id: "6",          name: "Support",          price: "Included",          variant: "Dedicated",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"},
      ]}
      title="What you get"
      description="Comprehensive tools built for scale."
    />
  </div>

  <div id="who-its-for" data-section="who-its-for">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      title="Who it's for"
      description="Custom built for niche growth."
      bulletPoints={[
        {
          title: "Recruiting firms",          description: "Know which companies are about to hire before they post a single job."},
        {
          title: "Talent managers",          description: "Find out which brands are about to spend on creators before they go to market."},
        {
          title: "Creator agencies",          description: "Pitch the right brands at the exact moment their budget opens up."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",          badge: "Base",          price: "$1,500/month",          subtitle: "Great for early-stage growth",          features: [
            "1 market",            "50 companies monitored",            "Email outreach"],
        },
        {
          id: "growth",          badge: "Most popular",          price: "$2,500/month",          subtitle: "Best for scaling agencies",          features: [
            "2 markets",            "200 companies monitored",            "Email + LinkedIn outreach"],
        },
        {
          id: "agency",          badge: "Scale",          price: "$4,500/month",          subtitle: "For established firms",          features: [
            "Unlimited markets",            "Unlimited monitoring",            "All channels + Account Manager"],
        },
      ]}
      title="Pricing"
      description="Founding member pricing locked in for life."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Your system can be live in 48 hours"
      description="We build it once. It runs forever. You just close the deals."
      inputs={[
        {
          name: "email",          type: "email",          placeholder: "Enter your email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your market"}}
      buttonText="Get your system built"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C69ekZuuAf78S58EuGYfqjzjQM/a-clean-minimalist-ui-card-representing--1775695455575-872e3b4f.png"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="SignalHire"
      copyrightText="© 2025 SignalHire. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
