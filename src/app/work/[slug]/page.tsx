const WorkDetail = ({ params }: { params: { slug: string } }) => {
    return <div>Work: {params.slug}</div>
}

export default WorkDetail;