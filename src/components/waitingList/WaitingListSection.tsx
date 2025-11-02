import { WaitingListForm } from "./WaitingListForm";

export function WaitingListSection() {
  return (
    <>
    <div id="join-the-waiting-list"></div>
    <div className="text-center px-4 mb-15">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        Join the Newsletter
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Stay updated with the latest features, tips, and news from MFE Orchestrator.
      </p>
      <div className="max-w-2xl mx-auto">
        <WaitingListForm />
      </div>
    </div>
    </>
  );
}
