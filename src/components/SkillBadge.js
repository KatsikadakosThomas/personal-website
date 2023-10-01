import Image from "next/image";

function SkillBadge({path,name}) {
    return (  
<div className="rounded bg-cyan-900 hoverGlow p-2 flex flex-row items-center justify-center m-2">
    <Image className="mr-2" src={path} width="30" height="30"></Image>
    <span className="font-bold text-white">{name}</span> 
</div>
    );
}

export default SkillBadge;