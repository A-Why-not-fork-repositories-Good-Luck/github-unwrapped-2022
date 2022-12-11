import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {getFont} from './font';
import {LangPlaceholder} from './LangPlaceholder';
import {languageList} from './language-list';
import {LanguageIcon} from './Languages/LanguageIcon';
import {CompactStats} from './map-response-to-stats';
import {Theme} from './theme';
import {TopLangTitle} from './TopLangTitle';

// TODO: Generated by AI, improve types
function getLanguageIcons(
	languages: {color: string | null; name: string}[],
	icons: {name: string; Component: any}[]
) {
	const result: Record<string, React.FC | string | null> = {};

	// Create an object with the language name as the key and the corresponding icon or color as the value
	for (const language of languages) {
		const matchingIcon = icons.find((icon) => icon.name === language.name);
		if (matchingIcon) {
			result[language.name] = matchingIcon.Component;
		} else {
			result[language.name] = language.color;
		}
	}

	// Sort the languages so that those with icons come first
	const sortedLanguages = languages.sort((a, b) => {
		const aHasIcon = icons.some((icon) => icon.name === a.name);
		const bHasIcon = icons.some((icon) => icon.name === b.name);
		if (aHasIcon && !bHasIcon) {
			return -1;
		}
		if (!aHasIcon && bHasIcon) {
			return 1;
		}
		return 0;
	});

	// Return the corresponding icons or colors along with the language names
	return sortedLanguages.map((language) => ({
		name: language.name,
		icon: result[language.name],
	}));
}

export const TopLang: React.FC<{
	stats: CompactStats;
	theme: Theme;
}> = ({stats, theme}) => {
	if (!stats.topLanguages) {
		// TODO
		return null;
	}
	const list = getLanguageIcons(stats.topLanguages, languageList);
	console.log({list});
	return (
		<AbsoluteFill
			style={{
				backgroundColor: theme.background,
				fontFamily: 'MonaSans',
			}}
		>
			<TopLangTitle theme={theme}></TopLangTitle>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					marginTop: 200,
				}}
			>
				{stats.topLanguages.map((l) => {
					return <Lang key={l.name} lang={l}></Lang>;
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const style: React.CSSProperties = {
	display: 'inline-block',
};

export const Lang: React.FC<{
	lang: TopLanguage;
}> = ({lang}) => {
	const icon = languageList.find((f) => {
		return f.name === lang.name;
	});

	return (
		<div style={style} key={lang.name}>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					marginTop: 200,
				}}
			>
				{icon ? (
					<LanguageIcon icon={icon}></LanguageIcon>
				) : (
					<LangPlaceholder
						color={lang.color}
						name={lang.name}
					></LangPlaceholder>
				)}
			</AbsoluteFill>
		</div>
	);
};

getFont();
