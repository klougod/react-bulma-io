import React, {
  useState,
  useEffect,
  useRef,
  Children,
  ReactElement,
  ReactNode
} from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface DropdownProps {
  className?: String
  btnClassName?: String
  btnTitle?: String
  customBtn?: ReactNode
  children?: ReactNode
}

export const Dropdown = ({
  className,
  btnClassName,
  btnTitle,
  customBtn,
  children
}: DropdownProps) => {
  const [toggle, setToggle] = useState(false)
  const wrapperNode: any = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [wrapperNode])

  const handleClick = (e: MouseEvent) => {
    if (wrapperNode) {
      if (!wrapperNode.current.contains(e.target as Node)) {
        setToggle(false)
      }
    }
  }

  const Button = () => (
    <button
      className={`button ${btnClassName}`}
      aria-haspopup='true'
      aria-controls='dropdown-menu'
    >
      <span>{btnTitle}</span>
      <span className='icon is-small'>
        <FontAwesomeIcon icon={faAngleDown} />
      </span>
    </button>
  )

  return (
    <div
      ref={wrapperNode}
      className={`dropdown ${className} ${toggle && 'is-active'}`}
      onClick={() => setToggle(!toggle)}
    >
      <div className='dropdown-trigger'>
        {customBtn ? customBtn : <Button />}
      </div>
      <div className='dropdown-menu' id='dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          {Children.toArray(children).map((item: ReactElement, index) =>
            item.type !== 'hr'
              ? React.cloneElement(item, {
                  key: index,
                  className: `${
                    item.props.className ? item.props.className : ''
                  }dropdown-item`
                })
              : React.cloneElement(item, {
                  key: index,
                  className: 'dropdown-divider'
                })
          )}
        </div>
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  className: '',
  btnClassName: '',
  btnTitle: ''
}

export default Dropdown
