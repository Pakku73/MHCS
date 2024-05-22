import clsx from "clsx";

export const Section = (props: any) => {
  const classes = clsx()
  return (
    <section className="max-w-screen-2xl mx-auto my-[100px]">
      {props.children}

    </section>
  );
};
