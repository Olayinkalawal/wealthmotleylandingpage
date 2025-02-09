import { Button } from "@/components/ui/button";

interface Cta11Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Cta11 = ({
  heading = "Ready to Start Your Financial Journey?",
  description = "Take the first step towards financial freedom with WealthMotley. Join our community of successful investors and learn from the best.",
  buttons = {
    primary: {
      text: "Get Free E-Book",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScNKcEojCtRT24T6peQY8DQ8pQ_YpFNt80uqtGYs8BnA8KsqQ/viewform",
    },
    secondary: {
      text: "Book One-on-One Session",
      url: "https://selar.co/k7d4",
    },
  },
}: Cta11Props) => {
  return (
    <section className="w-full py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center items-center gap-2 sm:flex-row sm:gap-4">
            {buttons.secondary && (
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href={buttons.secondary.url} target="_blank" rel="noopener noreferrer">
                  {buttons.secondary.text}
                </a>
              </Button>
            )}
            {buttons.primary && (
              <Button className="w-full sm:w-auto" asChild>
                <a href={buttons.primary.url} target="_blank" rel="noopener noreferrer">
                  {buttons.primary.text}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta11 }; 