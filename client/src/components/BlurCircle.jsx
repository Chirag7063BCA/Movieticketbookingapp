const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
  return (
    <div  
    /* -z-50 h-58 w-58 */
      className="absolute -z-90 h-98 w-98  aspect-square rounded-full bg-primary/30 blur-3xl"
      style={{ top: top, left: left, right: right, bottom: bottom }}
    >
    </div>
  );
};

export default BlurCircle;