import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Memory } from "@/content";
import { useMedia } from "@/lib/media";

export function MemoryModal({ memory, onClose }: { memory: Memory | null; onClose: () => void }) {
  return (
    <Dialog open={!!memory} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="glass max-h-[92vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl p-0 sm:rounded-3xl">
        {memory && <MemoryBody memory={memory} />}
      </DialogContent>
    </Dialog>
  );
}

function MemoryBody({ memory }: { memory: Memory }) {
  const { url } = useMedia(memory.src, "birthday-images");
  return (
    <div className="grid md:grid-cols-[1.1fr_1fr]">
      <div className="bg-muted">
        {url && <img src={url} alt={memory.title} className="h-full max-h-[60vh] w-full object-cover md:max-h-none md:rounded-l-3xl" />}
      </div>
      <div className="flex flex-col justify-center gap-4 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{memory.date}</p>
        <DialogTitle className="font-display text-4xl font-medium leading-tight text-foreground">{memory.title}</DialogTitle>
        <div className="h-px w-12 bg-primary/60" />
        <DialogDescription className="text-base leading-relaxed text-muted-foreground">{memory.description}</DialogDescription>
      </div>
    </div>
  );
}
