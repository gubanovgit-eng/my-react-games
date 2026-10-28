function GameItem({ game, onRename, onRemove }) {
    return (
        <div className="game-item">
            <span>{game}</span>

            <button
                className="edit-button"
                onClick={() => onRename(game)}
            >
                ✎
            </button>

            <button
                className="delete-button"
                onClick={() => onRemove(game)}
            >
                ×
            </button>
        </div>
    );
}

export default GameItem;