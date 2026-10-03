// Barre de progression pilotée par le scroll, en CSS pur (animation-timeline: scroll()).
// Navigateurs sans support : la barre reste simplement masquée.
export default function ScrollProgress() {
  return <div aria-hidden="true" className="scroll-progress fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-accent to-cyan" />
}
