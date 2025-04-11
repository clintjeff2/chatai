import React, { useState, useContext } from 'react';
import { AppContext } from '../AppProvider';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

// AIzaSyCS1kPJH4dDDR9VnZUbcy7OCqzmmW60N1g

const ai = new GoogleGenAI({
	apiKey: 'AIzaSyCS1kPJH4dDDR9VnZUbcy7OCqzmmW60N1g',
});

function ChatAi() {
	const [hasClicked, setHasClicked] = useState(false);
	const [aiResponse, setAiResponse] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [question, setQuestion] = useState('');
	const context = useContext(AppContext);

	const generateAiContent = async () => {
		if (question === '') {
			alert('Please enter a question.');
			return;
		}
		setHasClicked(true);
		setIsLoading(true);
		const response = await ai.models.generateContent({
			model: 'gemini-2.0-flash',
			contents: question,
		});
		setAiResponse(response.text);
		setIsLoading(false);
	};

	return (
		<div className="chat">
			<header className="chat-header">
				<img src="/chatai-logo.png" alt="Logo Pic" />
				<div className="person">
					<span className="name">{context.user?.email.split('@')[0]}</span>
					<span className="logo">{context.user?.email.split('@')[0][0]}</span>
				</div>
			</header>
			<main className="ai-section">
				<div className="init">
					{hasClicked && (
						<div className="ai-response">
							{isLoading === false && <Markdown>{aiResponse}</Markdown>}
							{isLoading && (
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										height: '100%',
									}}
								>
									<img src="/loading-gif-loading.gif" alt="Loading" />
								</div>
							)}
						</div>
					)}
					{hasClicked !== true && (
						<h2>
							How may I be of help,{' '}
							<span>{context.user?.email.split('@')[0]} </span>?
						</h2>
					)}
					<form action="">
						<textarea
							rows={3}
							placeholder="Ask anything..."
							name=""
							id=""
							value={question}
							onChange={(e) => setQuestion(e.target.value)}
						></textarea>
						<button
							onClick={(e) => {
								e.preventDefault();
								generateAiContent();
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
