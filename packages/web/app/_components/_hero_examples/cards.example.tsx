import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    cn,
} from "fatcn-ui";


const CardsExample = ({className}: {className?: string}) => {
  return (
    <div className={cn("grid grid-cols-2 gap-2 max-h-min flex-1", className)}>
      {[
        {
          label: "Customer Growth",
          value: "+12%",
          size: "sm",
          variant: "default",
        },
        {
          label: "Average Deal Size",
          value: "$2,345",
          size: "sm",
          variant: "secondary",
        },
      ].map((stat, index) => (
        <Card
          key={index}
          variant={stat.variant as "default" | "secondary" | null}
          size={stat.size as "sm" | "md" | "lg" | null}
          className="w-full h-48"
        >
          <CardHeader>
            <CardTitle>{stat.label}</CardTitle>
            <CardDescription>{stat.label}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{stat.value}</div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardsExample;
