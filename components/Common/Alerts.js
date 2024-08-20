const Alert = ({type,errors,onClose}) => {
    return (
        <>
            {errors && errors.length > 0 && (
                <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
                    <strong>
                        {type == 'danger' && 'Error!'}
                    </strong>
                    {errors.map((error,index) => (
                        <p key={index} className={'m-0'}>{error}</p>
                    ))}
                    <button type="button" onClick={e => onClose && onClose()} className="btn-close"/>
                </div>
            )}
        </>
    )
}
export default Alert;