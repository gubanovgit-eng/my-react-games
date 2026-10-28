import { useState } from "react";

function Counter({ title, initialCount = 0 }) {
    
    const [count, setCount] = useState(initialCount);

    return (
        <section>
            <h2>{title}</h2>

            <p className="count">{count}</p>

            {count >= 10 && (
                <p className="success-message">Отличный результат!</p>
            )}

            <div className="buttons">
                <button
                    className="decrease"
                    onClick={() => setCount(c => c - 1)}
                >
                    − Уменьшить
                </button>

                <button
                    className="increase"
                    onClick={() => setCount(c => c + 1)}
                >
                    + Увеличить
                </button>
            </div>

            <button
                className="reset"
                onClick={() => setCount(0)}
            >
                ↻ Сбросить
            </button>
        </section>
    )
}

export default Counter