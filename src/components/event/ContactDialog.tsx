import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  query: z.string().trim().min(1, "Please describe your query").max(2000),
});

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, query });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: parsed.data,
      });
      if (error) throw error;
      if (!data?.success) throw new Error(data?.error || "Failed to send");

      toast.success("Message sent! The team will reach out shortly.");
      setName("");
      setEmail("");
      setQuery("");
      onOpenChange(false);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send message";
      toast.error(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] glass-card border-white/60">
        <DialogHeader>
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
            <Mail className="h-6 w-6 text-primary-foreground" />
          </div>
          <DialogTitle className="font-serif text-3xl">Event Contact Form</DialogTitle>
          <DialogDescription>
            Need to reach the organizing team during the event? Send us a quick message and we'll respond as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="c-name">Participant name</Label>
            <Input id="c-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} placeholder="Jane Doe" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="c-email">Parent email</Label>
            <Input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} placeholder="parent@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="c-query">Query</Label>
            <Textarea id="c-query" value={query} onChange={(e) => setQuery(e.target.value)} maxLength={2000} rows={4} placeholder="How can we help?" />
          </div>
          <Button type="submit" variant="cta" className="w-full" size="lg" disabled={sending}>
            {sending ? (<><Loader2 className="h-4 w-4 animate-spin mr-2" /> Sending…</>) : "Send Message"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Alternatively, message (408) 872 - 2032.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
