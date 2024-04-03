import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import owl from "./assets/owl.json";

export const LottieIMG = () => {
  const style = {
    height: 400,
  };

  const owlRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div>
      <Lottie
        animationData={owl}
        lottieRef={owlRef}
        style={style}
        loop={true}
        onComplete={() => {
          owlRef.current?.setDirection(-1);
          owlRef.current?.play();
        }}
      />
    </div>
  );
};
