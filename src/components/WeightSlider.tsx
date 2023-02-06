import style from '../styles/Inputs.module.css';

type Props = {
  weights: number[],
  weight: number,
  setter: any,
}

const WeightSlider = (props: Props) => {
  const { weights, weight, setter } = props;

  const setWeight = (e: any) => {
    setter(e.target.value);
  }
  return (
    <div className={style.inputRangeWrapper}>
      <input disabled={weights.length === 1} type="range" min={weights[0]} max={weights[weights.length - 1]} step='100' onChange={setWeight} value={weight} className={style.inputRange} />
      <span className={style.rangeTitle}>Weight</span>
    </div>
  )
}

export default WeightSlider;
