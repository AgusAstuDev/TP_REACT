interface Props {
  text: string;
  color: string;
}

export default function MiPrimerComponente({ text, color }: Props) {
  return (
    <div style={{ color: `${color}` }}>
      <p>{text}</p>
    </div>
  );
}
