export default function ActiveDirectoryLab() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Active Directory Home Lab</h1>

      <p>
        This project documents a Windows Server-based Active Directory lab used
        to practice enterprise identity, authentication, DNS, Group Policy, and
        Windows client administration.
      </p>

      <h2>Environment</h2>
      <ul>
        <li>Windows Server 2022 Domain Controller</li>
        <li>Active Directory Domain Services</li>
        <li>DNS role installed on the domain controller</li>
        <li>Windows 11 domain-joined client VM</li>
        <li>VirtualBox virtualization environment</li>
      </ul>

      <h2>Skills Demonstrated</h2>
      <ul>
        <li>Creating and managing users and groups</li>
        <li>Joining a Windows client to a domain</li>
        <li>Understanding DNS dependency in Active Directory</li>
        <li>Planning basic OU and Group Policy structure</li>
        <li>Documenting infrastructure clearly for future reference</li>
      </ul>

      <h2>Next Steps</h2>
      <ul>
        <li>Add screenshots of the domain controller and client VM</li>
        <li>Document DNS troubleshooting</li>
        <li>Add Group Policy examples</li>
        <li>Add a simple architecture diagram</li>
      </ul>
    </main>
  );
}