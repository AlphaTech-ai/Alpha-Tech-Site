interface Props {
  text: string;
}

export default function SectionBadge({ text }: Props) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      {text}
    </span>
  );
}
