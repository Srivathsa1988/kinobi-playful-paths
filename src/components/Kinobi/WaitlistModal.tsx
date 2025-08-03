import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  source: string;
}

export const WaitlistModal = ({ open, onClose, source }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!email) {
      toast({ title: "Please enter a valid email." });
      return;
    }

    const userId = (() => {
        const existing = localStorage.getItem('kinobi_user_id');
        if (existing) return existing;
        const id = crypto.randomUUID();
        localStorage.setItem('kinobi_user_id', id);
        return id;
    })();

    setLoading(true);
    try {
        const formData = new FormData();
        formData.append('user_sub_type', 'waitlist');
        formData.append('user_id', userId);
        formData.append('email_id', email);
        formData.append('prod_selection', source);
        formData.append('timestamp', new Date().toISOString());

        fetch('https://script.google.com/macros/s/AKfycbyBKafEvoe9IMX57RtP7ZuUEglvu1HVhy2RUAeBHfjdMoBgcEyDckvB7Wi2jzCyXAeG/exec', {
        method: 'POST',
        body: formData
        })
        .then(async response => {
        const text = await response.text();
        console.log('HTTP Response:', response.status, response.statusText, text);

        toast({ title: "🎉 You're on the waitlist!" });

        })
        .catch(error => {
        toast({ title: "Something went wrong. Please try again." });
        console.error('Fetch error:', error);
        });      
      setEmail("");
      onClose(); // close modal
    } catch (err) {
      toast({ title: "Something went wrong. Please try again." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <div className="space-y-4">
          <Label htmlFor="email">Join the Kinobi Waitlist</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
