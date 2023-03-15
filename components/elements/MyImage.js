import Image from "next/future/image";

function MyImage({ src, width, alt, className, ...rest }) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        layout="raw"
        width={width}
        className={className}
        {...rest}
      />
    </div>
  );
}

export default MyImage;
