import VisionCard from "./VisionCard";

function VisionCards() {
  return (
    <section className="px-gutter my-space-md flex flex-col gap-space-md">
      {/* Intro / Emblem section will go here */}

      <VisionCard
        icon="psychiatry"
        label="Vision 01 • For Farmers"
        title="Growing Agriculture"
        badge="Agronomy"
        description="Championing sustainable farming practices, regenerative soil preservation, and hyper-localized agronomic advisory that reduces chemical dependency while doubling yields."
        iconClassName="bg-primary-fixed/50 text-on-primary-fixed-variant"
        badgeClassName="bg-primary/10 text-primary"
      />

      <VisionCard
        icon="diversity_3"
        label="Vision 02 • For People"
        title="Creating Prosperity"
        badge="Community"
        description="Uniting consumers and producers through transparent, equitable supply chains. Guaranteeing unadulterated nutritious food, food security, and dignified livelihoods across rural districts."
        iconClassName="bg-secondary-fixed text-on-secondary-fixed"
        badgeClassName="bg-secondary-fixed-dim/40 text-on-secondary-fixed-variant"
      />

      <VisionCard
        icon="trending_up"
        label="Vision 03 • Company & Future"
        title="Building a Victorious Future"
        badge="Scaling"
        description="Architecting resilient, climate-positive agricultural infrastructure through continuous tech breakthroughs, institutional research alliances, and generational eco-stewardship."
        iconClassName="bg-surface-container-highest text-primary"
        badgeClassName="bg-surface-container text-primary"
      />
    </section>
  );
}

export default VisionCards;