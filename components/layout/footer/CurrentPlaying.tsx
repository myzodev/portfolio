"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { div } from "framer-motion/client";

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
		try {
			const response = await fetch("http://localhost:8888/");
			const data = await response.json();
			setCurrentPlaying(data);
		} catch (error) {
			console.error("Failed to fetch playing status:", error);
		}
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
		<aside className="group link-overlay-box relative flex items-center justify-end gap-3">
			<div className="min-w-0 text-right">
				{isPlaying ? (
					<>
						<p className="text-muted-foreground truncate text-xs whitespace-nowrap">{artist}</p>

						<Link className="link-overlay block truncate text-xs whitespace-nowrap" target="_blank" href={url}>
							{track}
						</Link>
					</>
				) : (
					<>
						<p className="text-muted-foreground text-xs">Currently</p>
						<p className="text-xs">Not playing</p>
					</>
				)}
			</div>

			<div className="bg-muted-foreground/10 text-foreground relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg p-2">
				<div
					className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isPlaying ? "translate-y-0 group-hover:-translate-y-full" : "-translate-y-full"}`}
				>
					<div className="absolute inset-0 flex items-center justify-center gap-0.5">
						<span className="w-0.75 animate-[music_1s_ease-in-out_infinite] rounded-sm bg-sky-400" />
						<span className="w-0.75 animate-[music_0.8s_ease-in-out_infinite_0.2s] rounded-sm bg-sky-400" />
						<span className="w-0.75 animate-[music_1.2s_ease-in-out_infinite_0.4s] rounded-sm bg-sky-400" />
					</div>
				</div>

				<figure
					className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isPlaying ? "translate-y-full group-hover:translate-y-0" : "translate-y-0"}`}
				>
					<SpotifyIcon className="size-5" />
				</figure>
			</div>
		</aside>
	);
}
