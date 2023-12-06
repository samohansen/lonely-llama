import Image from "next/image";

export default function LlamaIconText(props: {width: number, height: number}) {
  props = props || {};
  return (
    <Image
      src="/llama_logo_text.png"
      alt="Llama Logo"
      width={props.width}
      height={props.height}
    />
  );
}
