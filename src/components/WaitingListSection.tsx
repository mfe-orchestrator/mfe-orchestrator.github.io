import { WaitingListForm } from "./WaitingListForm";

export function WaitingListSection() {
  return (
    <>
    <div id="join-the-waiting-list"></div>
    <div className="text-center px-4 mb-15">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        Join the Early Access Waiting List
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Be among the first to experience our platform. Get early access and exclusive updates.
      </p>
      <div className="max-w-2xl mx-auto">
        <WaitingListForm />
      </div>
    </div>
    </>
  );
}
