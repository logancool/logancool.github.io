import React, { useState, useEffect } from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const technologies = [
    // Most proficient first (drop first, end up on bottom)
    { name: 'TypeScript', level: 1, color: '#3178C6', width: 2 },
    { name: 'React', level: 1, color: '#61DAFB', width: 2 },
    { name: 'Next.js', level: 1, color: '#000000', width: 1 },
    { name: 'Node.js', level: 1, color: '#339933', width: 1 },

    { name: 'HTML5', level: 2, color: '#E34F26', width: 1 },
    { name: 'CSS3', level: 2, color: '#1572B6', width: 1 },
    { name: 'SCSS', level: 2, color: '#CC6699', width: 1 },
    { name: 'Tailwind CSS', level: 2, color: '#06B6D4', width: 1 },

    { name: 'Jest', level: 3, color: '#C21325', width: 1 },
    { name: 'React Testing Library', level: 3, color: '#E33332', width: 1 },
    { name: 'Storybook', level: 3, color: '#FF4785', width: 1 },
    { name: 'Percy', level: 3, color: '#9E66BF', width: 1 },

    { name: 'Babel', level: 4, color: '#F9DC3E', width: 1 },
    { name: 'Webpack', level: 4, color: '#8DD6F9', width: 1 },
    { name: 'AWS Lambda', level: 4, color: '#FF9900', width: 1 },
    { name: 'DynamoDB', level: 4, color: '#4053D6', width: 1 },

    { name: 'Cognito', level: 5, color: '#D94D4D', width: 1 },
    { name: 'Route53', level: 5, color: '#9D7EE2', width: 1 },
    { name: 'CloudFront', level: 5, color: '#FF9900', width: 1 },
    { name: 'GraphQL', level: 5, color: '#E10098', width: 1 },

    { name: 'REST', level: 6, color: '#0096C7', width: 1 },
    { name: 'DataDog', level: 6, color: '#632CA6', width: 1 },
    { name: 'Cloudinary', level: 6, color: '#3448C5', width: 1 },
    { name: 'Firebase', level: 6, color: '#FFCA28', width: 1 },

    { name: 'WYSIWYG editors', level: 7, color: '#00C49A', width: 1 },
    { name: 'CMS integration', level: 7, color: '#FF6B6B', width: 1 },
    { name: 'SEO optimization', level: 7, color: '#38E54D', width: 1 },

    // Least proficient last (drop last, end up on top)
    { name: 'Accessibility', level: 8, color: '#9C27B0', width: 1 },
    { name: 'Performance tuning', level: 8, color: '#F44336', width: 1 },
    { name: 'Google Maps API', level: 8, color: '#4285F4', width: 1 },
];

const BOARD_WIDTH = 4;
const BOARD_HEIGHT = 8;
const BLOCK_SIZE = 50;

const StackPage = () => {
    const [board, setBoard] = useState(
        Array(BOARD_HEIGHT)
            .fill()
            .map(() => Array(BOARD_WIDTH).fill(null)),
    );
    const [currentPiece, setCurrentPiece] = useState(0);
    const [piecePosition, setPiecePosition] = useState({
        x: Math.floor((BOARD_WIDTH - technologies[0].width) / 2),
        y: 0,
    });
    const [gameActive, setGameActive] = useState(true);
    const [speed, setSpeed] = useState(1);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (gameActive && currentPiece < technologies.length) {
            const timer = setInterval(() => {
                dropPiece();
            }, 1000 / speed);
            return () => clearInterval(timer);
        }
    }, [gameActive, currentPiece, piecePosition, speed]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!gameActive || currentPiece >= technologies.length) return;

            if (e.key === 'ArrowLeft') {
                movePiece(-1);
            } else if (e.key === 'ArrowRight') {
                movePiece(1);
            } else if (e.key === 'ArrowDown') {
                dropPiece();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [gameActive, currentPiece, piecePosition]);

    const movePiece = (direction) => {
        const tech = technologies[currentPiece];
        const newX = piecePosition.x + direction;

        // Check bounds and collisions for multi-width pieces
        if (newX >= 0 && newX + tech.width <= BOARD_WIDTH) {
            let canMove = true;
            for (let i = 0; i < tech.width; i++) {
                if (board[piecePosition.y][newX + i]) {
                    canMove = false;
                    break;
                }
            }
            if (canMove) {
                setPiecePosition((prev) => ({ ...prev, x: newX }));
            }
        }
    };

    const dropPiece = () => {
        const tech = technologies[currentPiece];
        const newY = piecePosition.y + 1;

        // Check if piece can drop further
        let canDrop = true;
        if (newY >= BOARD_HEIGHT) {
            canDrop = false;
        } else {
            for (let i = 0; i < tech.width; i++) {
                if (board[newY][piecePosition.x + i]) {
                    canDrop = false;
                    break;
                }
            }
        }

        if (!canDrop) {
            // Place piece on board
            const newBoard = [...board];
            for (let i = 0; i < tech.width; i++) {
                newBoard[piecePosition.y][piecePosition.x + i] = tech;
            }
            setBoard(newBoard);

            // Move to next piece
            if (currentPiece < technologies.length - 1) {
                setCurrentPiece((prev) => prev + 1);
                const nextTech = technologies[currentPiece + 1];

                // Find next available position, checking columns from left to right
                let nextX = 0;
                let found = false;

                for (let col = 0; col <= BOARD_WIDTH - nextTech.width && !found; col++) {
                    for (let row = 0; row < BOARD_HEIGHT; row++) {
                        let canPlace = true;
                        for (let i = 0; i < nextTech.width; i++) {
                            if (newBoard[row][col + i]) {
                                canPlace = false;
                                break;
                            }
                        }
                        if (canPlace) {
                            nextX = col;
                            found = true;
                            break;
                        }
                    }
                }

                setPiecePosition({ x: found ? nextX : Math.floor((BOARD_WIDTH - nextTech.width) / 2), y: 0 });
            } else {
                setGameActive(false);
            }
        } else {
            setPiecePosition((prev) => ({ ...prev, y: newY }));
        }
    };

    const showEndState = () => {
        const newBoard = Array(BOARD_HEIGHT)
            .fill()
            .map(() => Array(BOARD_WIDTH).fill(null));

        technologies.forEach((tech, index) => {
            const row = BOARD_HEIGHT - 1 - Math.floor(index / BOARD_WIDTH);
            const col = index % BOARD_WIDTH;
            if (row >= 0) {
                newBoard[row][col] = tech;
            }
        });

        setBoard(newBoard);
        setGameActive(false);
    };

    const reset = () => {
        setBoard(
            Array(BOARD_HEIGHT)
                .fill()
                .map(() => Array(BOARD_WIDTH).fill(null)),
        );
        setCurrentPiece(0);
        setPiecePosition({ x: Math.floor((BOARD_WIDTH - technologies[0].width) / 2), y: 0 });
        setGameActive(true);
    };

    return (
        <PageContent>
            <div styleName="stackContainer">
                <h2 styleName="stackTitle">Tech Stack Tetris</h2>
                <p styleName="stackDescription">
                    <i>Technologies falling by proficiency - most skilled drop first, least skilled on top</i>
                </p>

                <div styleName="controls">
                    <button styleName="controlBtn" onClick={() => setShowList(!showList)}>
                        {showList ? 'Show Tetris Game' : 'Just Give Me a List'}
                    </button>
                    {!showList && (
                        <>
                            <button styleName="controlBtn" onClick={showEndState}>
                                Sort Proficiency
                            </button>
                            <button styleName="controlBtn" onClick={reset}>
                                Reset Game
                            </button>
                            <div styleName="speedControl">
                                <label>Speed: </label>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="3"
                                    step="0.5"
                                    value={speed}
                                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                />
                                <span>{speed}x</span>
                            </div>
                        </>
                    )}
                </div>

                {showList ? (
                    <div styleName="techList">
                        <h3>In order of proficiency</h3>
                        <ol styleName="simpleList">
                            {technologies.map((tech, index) => (
                                <li key={tech.name}>{tech.name}</li>
                            ))}
                        </ol>
                    </div>
                ) : (
                    <>
                        {!showList && (
                            <div styleName="mobileControls">
                                <button styleName="mobileBtn" onClick={() => movePiece(-1)}>
                                    ← Left
                                </button>
                                <button styleName="mobileBtn" onClick={() => dropPiece()}>
                                    ↓ Drop
                                </button>
                                <button styleName="mobileBtn" onClick={() => movePiece(1)}>
                                    Right →
                                </button>
                            </div>
                        )}
                        
                        {gameActive && currentPiece < technologies.length && (
                            <div styleName="gameInfo">
                                <p>Use ← → arrow keys to move, ↓ to drop faster</p>
                                <p>
                                    Dropping: <strong>{technologies[currentPiece].name}</strong>
                                </p>
                            </div>
                        )}

                        <div styleName="tetrisBoard">
                            {board.map((row, rowIndex) => (
                                <div key={rowIndex} styleName="boardRow">
                                    {row.map((cell, colIndex) => (
                                        <div
                                            key={colIndex}
                                            styleName="boardCell"
                                            style={{
                                                backgroundColor: cell ? cell.color : '#f0f0f0',
                                                color: cell ? 'white' : 'transparent',
                                                border: cell ? '1px solid rgba(255,255,255,0.3)' : '1px solid #ddd',
                                            }}
                                        >
                                            {cell && <span styleName="cellText">{cell.name}</span>}
                                            {gameActive &&
                                                currentPiece < technologies.length &&
                                                rowIndex === piecePosition.y &&
                                                colIndex >= piecePosition.x &&
                                                colIndex < piecePosition.x + technologies[currentPiece].width && (
                                                    <div
                                                        styleName="fallingPiece"
                                                        style={{
                                                            backgroundColor: technologies[currentPiece].color,
                                                        }}
                                                    >
                                                        {colIndex === piecePosition.x && (
                                                            <span styleName="cellText">
                                                                {technologies[currentPiece].name}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </PageContent>
    );
};

export default StackPage;
