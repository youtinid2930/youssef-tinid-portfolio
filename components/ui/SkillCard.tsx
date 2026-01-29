type SkillCardProps = {
  name: string;
};

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded shadow-sm text-center">
      {name}
    </div>
  );
}
