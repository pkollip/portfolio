import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl">
      <link
        href="https://github.com/pkollip/TreeCoverage-ClimateChange"
        className="group block"
        // prefetch={false}
      >
        <img
          src="https://github.com/pkollip/TreeCoverage-ClimateChange"
          width="400"
          height="200"
          alt="Project Thumbnail"
          className="w-full h-[200px] object-cover transition-all group-hover:scale-105 group-focus-within:scale-105"
          style={{ aspectRatio: "400/200", objectFit: "cover" }}
        />
        <CardContent className="p-6 space-y-3">
          <CardTitle className="text-lg font-semibold">
            Tree Coverage and Climate Change
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Lorem ipsum
          </CardDescription>
          <Button
            variant="link"
            className="text-primary hover:underline focus-visible:underline"
          >
            View Project
          </Button>
        </CardContent>
      </link>
    </Card>
  );
}
