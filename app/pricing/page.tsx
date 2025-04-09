import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PricingTable from '@/components/pricing-table';

const Pricing = () => {
    return (
        <div>
            <section className="border-t border-border/40 vercel-section py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Transparent Pricing</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose the plan that works best for your needs. All plans include our quality guarantee and dedicated
                            support.
                        </p>
                    </div>
                    <PricingTable />
                    <div className="mt-16 max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Flexible Pricing Options</h3>
                        <p className="text-lg text-muted-foreground mb-6">
                            We offer both hourly and project-based pricing to accommodate different needs and project types.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                                <h4 className="text-xl font-bold mb-2">Hourly Rates</h4>
                                <p className="text-muted-foreground mb-4">
                                    Best for ongoing development, maintenance, and projects with evolving requirements.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Maximum flexibility</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Scale up or down as needed</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>15% discount for long-term contracts</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                                <h4 className="text-xl font-bold mb-2">Project-Based</h4>
                                <p className="text-muted-foreground mb-4">
                                    Best for well-defined projects with clear requirements and deliverables.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Starting from just $500</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Fixed cost, no surprises</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Clear project scope and timeline</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
                                <Link href="/contact">
                                    Get a custom quote
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-4">Need a custom solution?</p>
                        <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
                            <Link href="/contact">
                                Contact us for custom pricing
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;