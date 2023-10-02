import Image from "next/image";

function SkillBadge({path,name,idx}) {
    return (  
<div key={`skillbadge${idx}`} className="rounded bg-cyan-900 hoverGlow p-2 flex flex-row items-center justify-center m-2 min-w-[150px]">
    <Image className="mr-2" src={path} width="30" height="30" alt={name}></Image>
    <span className="font-bold text-white">{name}</span> 
</div>
    );
}

export default SkillBadge;