import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "FROOF | 오늘 뭐 먹지?",
		template: "%s | FROOF",
	},
	description:
		"FROOF 오늘 먹은 음식을 인증하고 사람들과 솔직한 후기를 나누는 음식 인증 커뮤니티입니다.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
