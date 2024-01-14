import React from "react";

function FreelancerWebComponent() {
  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/freelancer-web-app@0.0.11/dist/freelancerwebapp/freelancerwebapp.esm.js"
      ></script>
      <div>
        <freelancer-score username="hawkgeek" type="minimal"></freelancer-score>

        <br />

        <freelancer-score username="mikejcarton" type="card"></freelancer-score>
      </div>
    </>
  );
}

export default FreelancerWebComponent;
