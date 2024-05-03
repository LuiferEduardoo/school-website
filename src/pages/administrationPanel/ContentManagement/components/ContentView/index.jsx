import { Helmet } from "react-helmet";
import View from '../../../components/View';

const ContentView = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <View
                isLoading={props.isLoading}
                optionsFilter={props.optionsFilter} 
                valueFilter={props.valueFilter} 
                setValueFilter={props.setValueFilter}
                rows={props.rows} 
                columns={props.columns} 
                selectedKeys={props.selectedKeys} 
                setSelectedKeys={props.setSelectedKeys}  
                nameElement={props.elementName}
                elementView={props.elementView}
                totalPage={props.totalPage}
                search={props.search}
                setSearch={props.setSearch}
                create={props.create}
                handleCreate={props.handleCreate} 
                handleEdit={props.handleEdit} 
                handleView={props.handleView}
                handleDelete={props.handleDelete}
                offset={props.offset} 
                setOffset={props.setOffset}
            />
        </>
    );
} 

export default ContentView