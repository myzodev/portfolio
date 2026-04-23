import Github from "@/assets/images/icons/github.svg";
import Spotify from "@/assets/images/icons/spotify.svg";

type IconProps = {
	className?: string;
};

export function GithubIcon({ className }: IconProps) {
	return <Github className={className} />;
}

export function SpotifyIcon({ className }: IconProps) {
	return <Spotify className={className} />;
}
