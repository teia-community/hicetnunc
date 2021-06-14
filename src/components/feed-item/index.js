import React from 'react'
import { PATH } from '../../constants'
import { Padding } from '../layout'
import { Button } from '../button'
import { ItemInfo } from '../item-info'
import { renderMediaType } from '../media-types'
import { VisuallyHidden } from '../visually-hidden'
import styles from './styles.module.scss'

export const FeedItem = (props) => {
  const {
    display_uri,
    id,
    mime,
    creator_id,
    type,
    artifact_uri,
    token_holders,
  } = props
  /*   console.log(props)
  console.log(type)
  console.log(mime) */
  // const url =
  //   token_info.displayUri !== ''
  //     ? token_info.displayUri
  //     : token_info.artifactUri

  /*
  NOTE:
  crzy version from https://github.com/hicetnunc2000/hicetnunc/commit/6f91bde84c7a9f4adc9e4d869322b520890abd88
  mime === 'video/mp4'
                    ? artifact_uri.split('//')[1]
                    : display_uri !== ''
                    ? display_uri.split('//')[1]
                    : artifact_uri.split('//')[1],
   
   */

  return (
    <>
      <Padding>
        <div>
          <Button to={`${PATH.OBJKT}/${id}`}>
            {/* <VisuallyHidden>{`Go to OBJKT: ${token_info.name}`}</VisuallyHidden> */}
            <div className={styles.container}>
              {renderMediaType({
                mimeType: mime,
                uri: artifact_uri.split('//')[1],
                metadata: props,
              })}
            </div>
          </Button>
        </div>
        <ItemInfo
          id={id}
          token_holders={token_holders}
          creator_id={creator_id}
        />
      </Padding>
    </>
  )
}
