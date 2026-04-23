"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { SpotifyIcon } from "@/components/Icon";

type CurrentPlayingProps = {
	isPlaying: boolean;
	track: string;
	artist: string;
	album: string;
	url: string;
};

export default function CurrentPlaying() {
	const [currentPlaying, setCurrentPlaying] = useState<CurrentPlayingProps>();

	const fetchCurrentPlaying = async () => {
		const response = await fetch("http://localhost:8888/");
		const data = await response.json();
		setCurrentPlaying(data);
	};

	useEffect(() => {
		fetchCurrentPlaying();

		const interval = setInterval(() => {
			fetchCurrentPlaying();
		}, 60000); // 1 minute

		return () => clearInterval(interval);
	}, []);

	const { isPlaying = false, track = "", artist = "", url = "" } = currentPlaying ?? {};

	return (
		<article className="flex items-center gap-3">
			{isPlaying ? (
				<Link className="text-right" target="_blank" href={url}>
					<p className="text-muted-foreground text-xs">{artist}</p>
					<p className="text-xs">{track}</p>
				</Link>
			) : (
				<div className="text-right">
					<p className="text-muted-foreground text-xs">Currently</p>
					<p className="text-xs">Not playing</p>
				</div>
			)}

			<div className="bg-muted-foreground/10 text-foreground rounded-lg p-2">
				<SpotifyIcon className="size-5" />
			</div>
		</article>
	);
}
