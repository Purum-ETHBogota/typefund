import { useState } from 'react'
import DropdownSelector from './DropdownSelector';
import SizeSlider from './SizeSlider';
import ItalicSelector from './ItalicSelector';

type Props = {}

const FontView = ({}: Props) => {
  const [italic, setItalic] = useState(false);
  const [bold, setBold] = useState(false);
  const [size, setSize] = useState(16);
  const [style, setStyle] = useState('regular');

  return (
    <div>
        <div>
            <DropdownSelector />
            <SizeSlider />
            <SizeSlider />
            <ItalicSelector value={italic} setter={setItalic} />
        </div>
    </div>
  )
}

export default FontView;
