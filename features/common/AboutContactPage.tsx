import React from 'react';
import { UserIcon, MailIcon } from '../../components/Icons';
import ContactForm from './ContactForm';

const AboutContactPage: React.FC = () => {
    return (
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto bg-background-primary w-full">
            <div className="max-w-4xl mx-auto space-y-12">
                <section>
                    <div className="flex items-center mb-4">
                        <UserIcon className="w-8 h-8 mr-3 text-accent-primary" />
                        <h1 className="text-3xl font-bold text-text-primary">About CSLab</h1>
                    </div>
                    <div className="space-y-4 text-text-secondary bg-background-secondary p-6 rounded-lg border border-border">
                        <p>
                            CSLab was born from a passion for making computer science education more accessible and engaging. 
                            Many CS concepts, particularly algorithms and data structures, can seem abstract and difficult to grasp from textbooks alone.
                            This platform aims to bridge that gap by providing hands-on, visual tools that bring these ideas to life.
                        </p>
                        <p>
                            My goal is to create a high-quality, open resource for students, educators, and self-learners. 
                            Whether you're visualizing how Bubble Sort works for the first time or exploring the intricacies of deadlock avoidance with the Banker's Algorithm, 
                            CSLab is here to help you build a deeper, more intuitive understanding.
                        </p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center mb-4">
                        <MailIcon className="w-8 h-8 mr-3 text-accent-primary" />
                        <h1 className="text-3xl font-bold text-text-primary">Contact Me</h1>
                    </div>
                     <div className="bg-background-secondary p-6 rounded-lg border border-border">
                        {/* FIX: Passed the required 'categories' prop to ContactForm. */}
                        <ContactForm categories={[]} />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutContactPage;
