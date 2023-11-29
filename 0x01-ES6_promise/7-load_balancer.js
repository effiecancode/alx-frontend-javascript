export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

/**
 * the function takes two promises as parameters
 * uses promise.race() to determine the quickest download between the two promises
 * whichever promise resolves or rejects first becomes the outcome of promise.race()
 */
