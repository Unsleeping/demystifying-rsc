import PageInfo from "@/components/PageInfo";
export default ({children})=>{
  return <div className={"box"}>
    <PageInfo filename="/app-router/nested/layout.js"/>
    {children}
  </div>
}

