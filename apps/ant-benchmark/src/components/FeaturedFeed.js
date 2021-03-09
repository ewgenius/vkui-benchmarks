import {Card, Image, Space} from "antd";

export const FeaturedFeed = ({items}) => {
    return <Space direction="vertical" style={{width: 300, padding: "12px"}}>
        {
            items.map(item => <Card title={item.title}>
                <Image src={item.image}/>
                <Card.Meta title={item.subtitle} description={item.text}/>
            </Card>)
        }
    </Space>
}