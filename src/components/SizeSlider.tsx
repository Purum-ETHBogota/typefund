import style from '../styles/Inputs.module.css';

type Props = {
  size: number,
  setter: any,
}

const SizeSlider = (props: Props) => {
  const { size, setter } = props;

  const setSize = (e: any) => {
    setter(e.target.value);
  }
  return (
    <div className={style.inputRangeWrapper}>
      <input type="range" min='12' max='144' step='4' onChange={setSize} value={size} className={style.inputRange} />
      <span className={style.rangeTitle}>Size</span>
    </div>
  )
}

export default SizeSlider;
