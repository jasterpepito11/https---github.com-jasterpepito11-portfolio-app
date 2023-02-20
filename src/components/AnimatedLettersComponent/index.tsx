import './index.scss'

export default function AnimatedLettersComponent({classWrapper, letterClass, strArray, idx}: {classWrapper: string, letterClass: string, strArray: string[], idx: number}): JSX.Element {
    return (
        <span className={classWrapper}>
            {strArray.map(function (char: string, i: number) {
                return (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                )
            })}
        </span>
    )
}
