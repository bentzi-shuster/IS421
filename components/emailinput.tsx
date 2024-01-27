import React, { useState, FormEvent } from 'react';
import { Input, Button } from '@nextui-org/react';
import Notification from '@/components/notification'

interface NotificationState {
    message: string;
    type: string;
}
interface EmailFormProps {
    onSubmit: (email: string) => void;
}

const MailchimpForm: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [notification, setNotification] = useState<NotificationState>({ message: '', type: '' });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = input;

        if (!email) return;

        try {
            const response = await fetch("/api/subscribe", {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                setInput('');
                setNotification({ message: 'Subscribed successfully!', type: 'success' });
            } else {
                throw new Error(data.error || 'An error occurred');
            }
        } catch (error: any) {
            setNotification({ message: 'Subscription failed: ' + error.message, type: 'error' });
        }

        // Auto-hide notification after some time
        setTimeout(() => setNotification({ message: '', type: '' }), 5000);
    };

    return (
        <div id="subscribe-form">
            <form onSubmit={handleSubmit}>
                <Input
                    isClearable
                    required
                    variant='bordered'
                    type='email'
                    label='Email'
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Your email"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onClear={() => setInput("")}
                />
                <Button type="submit" color="primary" size="lg">
                    Subscribe
                </Button>
            </form>
            <Notification message={notification.message} type={notification.type} />
        </div>
    );
};

export default MailchimpForm;
