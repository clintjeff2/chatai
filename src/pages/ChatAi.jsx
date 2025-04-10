import React, { useState, useContext } from 'react';
import { AppContext } from '../AppProvider';

function ChatAi() {
	const [hasClicked, setHasClicked] = useState(false);
	const context = useContext(AppContext);
	return (
		<div className="chat">
			<header className="chat-header">
				<img src="/chatai-logo.png" alt="Logo Pic" />
				<div className="person">
					<span className="name">{context.user.email.split('@')[0]}</span>
					<span className="logo">{context.user.email.split('@')[0][0]}</span>
				</div>
			</header>
			<main className="ai-section">
				<div className="init">
					{hasClicked && (
						<div className="ai-response">
							ere cupiditate reprehenderit ut doloribus. Eius consequuntur alias
							perferendis sint reiciendis ullam deleniti excepturi nihil amet
							ipsum rem hic laudantium odio soluta aliquid mollitia, distinctio
							inventore sequi maiores est dignissimos voluptatibus veritatis
							deserunt? Numquam reiciendis asperiores ipsum ducimus qui? Cumque
							ad doloremque inventore beatae voluptatibus quasi impedit laborum.
							Distinctio at nisi velit. Mollitia, voluptates voluptatum officiis
							sint fugiat, rerum necessitatibus ducimus debitis, laboriosam sed
							cumque doloremque harum nesciunt possimus asperiores. Quod, rem
							blanditiis sit laboriosam quia a laudantium consequuntur animi
							repellat aspernatur alias quas. Facilis ullam, eius aliquid
							suscipit placeat quasi sequi. Ab non nihil necessitatibus tempora
							debitis, alias est modi fuga explicabo minimam eum odit odio est!
							Dolorum magni ratione excepturi ad nesciunt.
						</div>
					)}
					{hasClicked !== true && (
						<h2>
							How may I be of help,{' '}
							<span>{context.user.email.split('@')[0]} </span>?
						</h2>
					)}
					<form action="">
						<textarea
							rows={3}
							placeholder="Ask anything..."
							name=""
							id=""
						></textarea>
						<button
							onClick={(e) => {
								e.preventDefault();
								setHasClicked(true);
							}}
						>
							<img src="/arrow-up.png" alt="" />
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}

export default ChatAi;
