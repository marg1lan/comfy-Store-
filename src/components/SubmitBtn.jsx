import { useNavigation } from "react-router-dom"

function SubmitBtn({text}) {
    const navigation = useNavigation()
    const isSubmiting = navigation.state == "submitting"
  return (
    <button type="submit" className="btn btn-primary btn-block capitalize" disablet={isSubmiting}>
       {isSubmiting ? (
        <>
        <span className="loading loading-spinner"></span>
        Sending ...
        </>
       ) : (
        text || 'Submit'
       )}
    </button>
  )
}

export default SubmitBtn